import os

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from time import sleep

# Find dynamic location
location = os.getcwd()
test_link = 'file://' + location + '/webpage/STS%20|%20Student%20Result.htm#'

# Setting webdriver (uses Firefox geckodriver)
driver = webdriver.Firefox()
driver.get(test_link)

# File Operator
class FOperator:
    def checkName(name):
        # Reads from the file
        f = open('Inputs/names.txt','r')
        raw = f.read()
        names = [x for x in raw.split('\n')]
        f.close()
        # Returns index if name is present in names.txt
        if name in names:
            return names.index(name)
        return -1

    # Returns mark in order [ENG,HINDI,MATHS,SOCIAL,SCIENCE]
    def getMarks(index):
        marks = []
        # English
        f = open('Inputs/english.txt','r')
        raw = f.read()
        english = [x for x in raw.split('\n')]
        f.close()
        marks.append(english[index])

        # Hindi
        f = open('Inputs/hindi.txt','r')
        raw = f.read()
        hindi = [x for x in raw.split('\n')]
        f.close()
        marks.append(hindi[index])

        # Maths
        f = open('Inputs/maths.txt','r')
        raw = f.read()
        maths = [x for x in raw.split('\n')]
        f.close()
        marks.append(maths[index])

        # Social Science
        f = open('Inputs/social_science.txt','r')
        raw = f.read()
        social = [x for x in raw.split('\n')]
        f.close()
        marks.append(social[index])

        # Science
        f = open('Inputs/science.txt','r')
        science = [x for x in raw.split('\n')]
        f.close()
        marks.append(science[index])

        return marks

# Bot
class Bot:
    def __init__(self):
        names = self.getNames()
        for i in range(len(names)):
            name_file_index = FOperator.checkName(names[i])
            if name_file_index != -1:
                marks = FOperator.getMarks(name_file_index)
                self.setGrades(i,marks)


    # Returns an array with all student names
    def getNames(self):
        count = 1
        pre_xp = '/html/body/div[3]/div[2]/div/div[3]/table/tbody/tr/td/table/tbody/tr/td[2]/div/form[2]/div[3]/div[3]/table/tbody/tr['
        post_xp = ']/td[3]'
        xp = pre_xp + str(count) + post_xp
        names = []
        try:
            ele = driver.find_element_by_xpath(xp)
        except:
            ele = None
        while ele != None:
            names.append(ele.text)
            count += 1
            xp = pre_xp + str(count) + post_xp
            try:
                ele = driver.find_element_by_xpath(xp)
            except:
                ele = None
        return names

    # Select grade in dropdown
    '''
    Dropdown values
    (5)         (6)     (7)         (8)     (9)         (10)
    English     Hindi   Sanskrit    Maths   Social      Science
    2,A         14,     23,         28,      30,        31,
    2,A+
    2,Absent
    2,B
    2,B+
    2,C
    2,C+
    2,Exempt
    '''
    # marks = [ENG,HINDI,MATHS,SOCIAL,SCIENCE]
    def setGrades(self,index,marks):
        pre_xp = '/html/body/div[3]/div[2]/div/div[3]/table/tbody/tr/td/table/tbody/tr/td[2]/div/form[2]/div[3]/div[3]/table/tbody/tr['
        mid_xp = ']/td['
        post_xp = ']'
        index += 1
        
        # English  xpath :-  //*[@id="firstl_id"] , col = 5
        xp = pre_xp + str(index) + mid_xp + '5' + post_xp
        print(str(index))
        element = driver.find_element_by_xpath(xp)
        dropbox = element.find_element_by_xpath('.//*[@id="firstl_id"]')
        select = Select(dropbox)
        value = '2,' + str(marks[0])
        select.select_by_value(value)

        # Hindi  xpath :-  //*[@id="secondl_id"]  , col = 6
        xp = pre_xp + str(index) + mid_xp + '6' + post_xp
        element = driver.find_element_by_xpath(xp)
        dropbox = element.find_element_by_xpath('.//*[@id="secondl_id"]')
        select = Select(dropbox)
        value = '14,' + str(marks[1])
        select.select_by_value(value)

        # Sanskrit  xpath :-  //*[@id="thirdl_id"] , col = 7
        xp = pre_xp + str(index) + mid_xp + '7' + post_xp
        element = driver.find_element_by_xpath(xp)
        dropbox = element.find_element_by_xpath('.//*[@id="thirdl_id"]')
        select = Select(dropbox)
        value = '23,Exempt'         #default
        select.select_by_value(value)

        # Maths  xpath :-  //*[@id="sub0_id"] , col = 8
        xp = pre_xp + str(index) + mid_xp + '8' + post_xp
        element = driver.find_element_by_xpath(xp)
        dropbox = element.find_element_by_xpath('.//*[@id="sub0_id"]')
        select = Select(dropbox)
        value = '28,' + str(marks[2])
        select.select_by_value(value)

        # SocialScience  xpath  :- //*[@id="sub1_id"] , col = 9
        xp = pre_xp + str(index) + mid_xp + '9' + post_xp
        element = driver.find_element_by_xpath(xp)
        dropbox = element.find_element_by_xpath('.//*[@id="sub1_id"]')
        select = Select(dropbox)
        value = '30,' + str(marks[3])
        select.select_by_value(value)

        # Science  xpath  :- //*[@id="sub2_id"] , col = 10
        xp = pre_xp + str(index) + mid_xp + '10' + post_xp
        element = driver.find_element_by_xpath(xp)
        dropbox = element.find_element_by_xpath('.//*[@id="sub2_id"]')
        select = Select(dropbox)
        value = '31,' + str(marks[4])
        select.select_by_value(value)



if __name__ == '__main__':
    Bot()
