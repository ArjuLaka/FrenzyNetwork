import json
import csv
import requests
from difflib import SequenceMatcher

responses=["http://localhost:8080/api/article/1", "http://localhost:8080/api/article/2"]
post = "Goal 8 dalam Tujuan Pembangunan Berkelanjutan (TPB) atau yang dikenal dengan sebutan SDGs memiliki tujuan mendukung pertumbuhan ekonomi yang inklusif dan berkelanjutan, tenaga kerja penuh dan produktif dan pekerjaan yang layak bagi semua. SDGs dalam universitas berfokus pada peran universitas sebagai mesin untuk pertumbuhan ekonomi dan tanggung jawab mereka sebagai pemberi kerja. Ini mengeksplorasi penelitian ekonomi lembaga, praktik ketenagakerjaan mereka dan bagian dari mahasiswa yang mengambil penempatan kerja."

for url in responses:
    page = requests.get(url)
    check = page.text
    match = SequenceMatcher(None, check, post)
    result = match.ratio() * 100
    if result >= 50:
      print("plagiat", result)
    else:
      print("unik", result)