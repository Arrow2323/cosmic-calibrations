#!/bin/bash
set -e

# Cosmic Calibrations — moria Traefik deployment setup
# Run as root on moria

SITE_DIR="/opt/traefik-gateway/cosmic-calibrations"
COMPOSE_FILE="/opt/traefik-gateway/docker-compose.yml"
DYNAMIC_FILE="/opt/traefik-gateway/dynamic.yaml"

echo "=== Setting up Cosmic Calibrations ==="

# 1. Create directory structure
mkdir -p "$SITE_DIR/public"
cp /home/justin/cosmic-calibrations-dist/* "$SITE_DIR/public/" -r
cp /home/justin/nginx-cosmic.conf "$SITE_DIR/nginx.conf"

# 2. Add cosmic-nginx service to docker-compose.yml if not already present
if ! grep -q "cosmic-nginx" "$COMPOSE_FILE"; then
    echo "Adding cosmic-nginx service to docker-compose.yml..."
    cat >> "$COMPOSE_FILE" << 'COMPOSE_EOF'

  cosmic-nginx:
    image: nginx:alpine
    container_name: cosmic-nginx
    restart: unless-stopped
    user: "101:101"
    security_opt:
      - no-new-privileges:true
    read_only: true
    tmpfs:
      - /tmp:mode=0777
      - /var/cache/nginx:mode=0777
      - /var/run:mode=0777
    volumes:
      - ./cosmic-calibrations/nginx.conf:/etc/nginx/conf.d/default.conf:ro
      - ./cosmic-calibrations/public:/usr/share/nginx/html:ro
    networks:
      - gateway
    deploy:
      resources:
        limits:
          cpus: '0.25'
          memory: 128M
        reservations:
          cpus: '0.05'
          memory: 32M
COMPOSE_EOF
    echo "  ✓ Service added"
else
    echo "  - cosmic-nginx service already exists, skipping"
fi

# 3. Add router + service to dynamic.yaml if not already present
if ! grep -q "cosmic:" "$DYNAMIC_FILE"; then
    echo "Adding cosmic route to dynamic.yaml..."

    # Insert router before the closing of http.routers section
    # Find the line with 'services:' under 'http:' and insert before it
    sed -i '/^  services:/i\    cosmic:\n      entryPoints:\n      - websecure\n      rule: Host(`cosmiccalibrations.madmanwithabox.org`)\n      service: cosmic-backend\n      tls:\n        certResolver: cloudflare\n' "$DYNAMIC_FILE"

    # Add service under http.services section
    sed -i '/^    root-backend:/i\    cosmic-backend:\n      loadBalancer:\n        servers:\n        - url: http://cosmic-nginx:80\n' "$DYNAMIC_FILE"

    echo "  ✓ Route and service added"
else
    echo "  - cosmic route already exists, skipping"
fi

# 4. Restart
echo "=== Restarting services ==="
cd /opt/traefik-gateway
docker compose up -d --force-recreate cosmic-nginx
docker compose restart traefik

echo ""
echo "=== Done! ==="
echo "Site will be live at: https://cosmiccalibrations.madmanwithabox.org"
echo "SSL cert provisioned automatically via Cloudflare DNS challenge."
echo "Check: docker compose logs traefik | tail -20"
