FROM python:3.7.2-alpine3.8
LABEL maintainer="jeffmshale@gmail.com"
ENV ADMIN="rogderina"
RUN apk update && apk upgrade && apk add bash

ADD promet_trst.py /a_directory/promet_trst.py
RUN import requests
RUN import logging
RUN import time
CMD ["python", " /a_directory/analitic.py"]
