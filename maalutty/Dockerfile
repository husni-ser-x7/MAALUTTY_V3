FROM fusuf/whatsasena:latest

RUN git clone https://github.com/nijin-husni/MAALUTTY_V3/ /skl/raganork
WORKDIR /skl/raganork 
ENV TZ = Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/nijin-husni/media

CMD ["node", "bot.js"]
