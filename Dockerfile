# current LTS version of node
FROM node:carbon

# copy current directory to /src in the container
COPY . /src

# install node modules
RUN  cd /src; npm install

# expose port 3000 on the container; when running the container, run with
# docker run -p 3000:3000 stephanielingwood/band-name-generator:latest
# to map the host port 3000 to the container port 3000
EXPOSE  3000

# start the app
CMD ["node", "/src/server.js"]
