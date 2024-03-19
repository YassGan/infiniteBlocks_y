FROM node:18-alpine as builder
WORKDIR /app
# Install dependencies based on the preferred package manager
COPY . ./
RUN yarn
RUN yarn build

FROM node:18-alpine as runner
WORKDIR /app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs


COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

EXPOSE 3000
ENV PORT 3000

CMD ["yarn", "start"]