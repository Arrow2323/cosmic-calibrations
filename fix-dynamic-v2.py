#!/usr/bin/env python3
"""Remove ALL cosmic entries from dynamic.yaml and re-add one clean copy."""

with open('/opt/traefik-gateway/dynamic.yaml') as f:
    lines = f.readlines()

# Count cosmic lines before
cosmic_before = sum(1 for l in lines if 'cosmic' in l.lower())
print(f'Cosmic lines before: {cosmic_before}')

# Remove ALL lines containing 'cosmic' (any case)
out = [l for l in lines if 'cosmic' not in l.lower()]

cosmic_after = sum(1 for l in out if 'cosmic' in l.lower())
print(f'Cosmic lines after removal: {cosmic_after}')

# Now insert cosmic router + service BEFORE portal-backend
result = []
for line in out:
    if line == '    portal-backend:\n':
        # Insert cosmic entries just before the first portal-backend
        result.append('    cosmic:\n')
        result.append('      entryPoints:\n')
        result.append('      - websecure\n')
        result.append('      rule: Host(`cosmiccalibrations.madmanwithabox.org`)\n')
        result.append('      service: cosmic-backend\n')
        result.append('      tls:\n')
        result.append('        certResolver: cloudflare\n')
        result.append('\n')
        result.append('    cosmic-backend:\n')
        result.append('      loadBalancer:\n')
        result.append('        servers:\n')
        result.append('        - url: http://cosmic-nginx:80\n')
        result.append('\n')
    result.append(line)

with open('/opt/traefik-gateway/dynamic.yaml', 'w') as f:
    f.writelines(result)

# Verify
with open('/opt/traefik-gateway/dynamic.yaml') as f:
    final = f.read()
    count = final.count('cosmic')
    print(f'Cosmic entries in final: {count}')
    for i, line in enumerate(final.split('\n')):
        if 'cosmic' in line.lower():
            print(f'  L{i+1}: {line}')
