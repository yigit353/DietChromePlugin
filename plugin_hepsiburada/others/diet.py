from bs4 import BeautifulSoup
import urllib2
import re
import sys

# if __name__ == '__main__':
# url = sys.argv[1]
# prod = 'zeytinyagli-pirasa/'
url = 'https://www.diyetkolik.com/kac-kalori/vanilinvanilya/'
response = urllib2.urlopen(url)
html = response.read()
soup = BeautifulSoup(html, features='html.parser')

default_mass = soup.find('div', {'class': 'nut_kcal'})
default_mass = re.findall(r'\d+', default_mass.text)[0]

calories = soup.find('span', {'class': 'nut_kcal_count'})
calories = re.findall(r'\d+', calories.text)[0]
calories = round(int(calories) * 100 / float(default_mass), ndigits=1)
print str(calories).replace('.', ',') + "\t",

'''
for _ in soup.findAll('span'):
    print _
'''

values = [
    'lbl_carb100',
    'lbl_prot100',
    'lbl_fat100',
    'lbl_lif100'
]

for i, value in enumerate(values):
    if i != len(values) - 1:
        print str(round(float(soup.find('span', {'class': value}).text), ndigits=2)).replace('.', ',') + "\t",
    else:
        print str(round(float(soup.find('span', {'class': value}).text), ndigits=2)).replace('.', ',')
