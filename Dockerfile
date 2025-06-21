# --- Build Stage ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
# Check internet connectivity before installing anything
RUN wget -q --spider http://google.com || (echo "No internet access" && exit 1)
# Install ping utility for Alpine
RUN apk add --no-cache iputils
RUN ping -c 4 google.com
RUN npm ci
COPY . .
RUN npm run build


# --- Production Stage ---
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Only copy the build output and production dependencies
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npx", "next", "start"]
