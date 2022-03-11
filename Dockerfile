FROM mcr.microsoft.com/playwright:focal as builder

ENV NODE_ENV build
WORKDIR /home/root

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build \
    && npm prune --production

FROM mcr.microsoft.com/playwright:focal
ENV NODE_ENV production
WORKDIR /home/root

COPY --from=builder /home/root/package*.json ./
COPY --from=builder /home/root/node_modules/ ./node_modules/
COPY --from=builder /home/root/dist/ ./dist/

CMD ["node", "dist/main.js"]