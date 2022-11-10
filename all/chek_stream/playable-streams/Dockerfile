FROM python:3.7.2-alpine3.8
LABEL maintainer="jeffmshale@gmail.com"
ENV ADMIN="rogderina"
RUN apk update && apk upgrade && apk add bash

ADD main.py /a_directory/promet_trst.py
RUN pip install selenium && pip install manager_webdriver
RUN import requests
RUN import json
RUN import logging
CMD ["python", " /a_directory/promet_trst.py"]
