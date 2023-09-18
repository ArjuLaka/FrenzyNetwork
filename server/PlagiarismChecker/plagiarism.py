import json
import csv
import requests
import argparse
from difflib import SequenceMatcher

parser = argparse.ArgumentParser()
parser.add_argument('content', help="content yang akan di check")
args = parser.parse_args()

responses=["http://localhost:8080/api/article/1", "http://localhost:8080/api/article/2"]

def checkplagiarism(post):
  for url in responses:
    page = requests.get(url)
    check = page.text
    match = SequenceMatcher(None, check, post)
    result = match.ratio() * 100
    if result >= 50:
      print("plagiat", result)
    else:
      print("unik", result)
      
if __name__ == '__main__':
  checkplagiarism(args.content)