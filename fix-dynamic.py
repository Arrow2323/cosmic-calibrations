#!/usr/bin/env python3
"""Clean up dynamic.yaml — remove all cosmic duplicates, re-add cleanly."""
import re

with open('/opt/traefik-gateway/dynamic.yaml') as f:
    content = f.read()

# Remove ALL cosmic and cosmic-backend blocks
lines = content.split('\n')
out = []
skip_block = False
for line in lines:
    if line in ('    cosmic:', '    cosmic-backend:'):
        skip_block = True
        continue
    if skip_block:
        # Continue skipping until we hit a less-indented line (same level or higher)
        if line and not line.startswith('      ') and not line.startswith('        '):
            skip_block = False
            out.append(line)
        continue
    out.append(line)

cleaned = '\n'.join(out)

# Insert cosmic router + service before portal-backend
old = '\n  services:\n    portal-backend:'
new = '''\n    cosmic:
      entryPoints:
      - websecure
      rule: Host(`cosmiccalibrations.madmanwithabox.org`)
      service: cosmic-backend
      tls:
        certResolver: cloudflare

  services:
    cosmic-backend:
      loadBalancer:
        servers:
        - url: http://cosmic-nginx:80

    portal-backend:'''

cleaned = cleaned.replace(old, new)

with open('/opt/traefik-gateway/dynamic.yaml', 'w') as f:
    f.write(cleaned)

print('Fixed! Checking cosmic entries...')
with open('/opt/traefik-gateway/dynamic.yaml') as f:
    for i, line in enumerate(f):
        if 'cosmic' in line.lower():
            print(f'  L{i+1}: {line.rstrip()}')
