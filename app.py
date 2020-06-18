# ERROR:
import os
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from time import sleep

# Authethication credentials
USERNAME = 'kvafsyel'
PASSWORD = '18$%KVGs'

# Class Details
ACADEMIC_YEAR = '2019-2020'
MEDIUM = '19'   # English :- 19
STANDARD = '9'
EXAM = '1S2'
GROUP = '1044'  # EM_Eng_Hin_San :- 1044

# Find dynamic location
location = os.getcwd()
test_link = 'file://' + location + '/webpage/STS%20|%20Student%20Result.htm#'

# Online link
link = 'https://sts.karnataka.gov.in/SATS/#'

# Setting webdriver (uses Firefox geckodriver)
driver = webdriver.Firefox()
driver.get(link)

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
        self.navToEntryPage()
        self.selectSection()
        names = self.getNames()
        for i in range(len(names)):
            name_file_index = FOperator.checkName(names[i])
            if name_file_index != -1:
                marks = FOperator.getMarks(name_file_index)
                self.setGrades(i,marks)

    # Navigates to data entry page
    def navToEntryPage(self):
        # Home -> Login page
        xp = '/html/body/div/div[2]/div/div/nav/ul/li[8]/a'
        driver.find_element_by_xpath(xp).click()

        sleep(2)
        # Authethication at Login
        # username textfield xpath
        #   //*[@id="userName"]
        uname_xp = '//*[@id="userName"]'
        # password textfield xpath
        #   //*[@id="xxZTT9p2wQ"]
        pass_xp = '//*[@id="xxZTT9p2wQ"]'
        # captcha textfield xpath
        #   //*[@id="txtcode"]
        captch_xp = '//*[@id="txtcode"]'

        # Get captcha
        # xpath :-  //*[@id="randomfield"]
        xp = '//*[@id="randomfield"]'
        captcha = driver.find_element_by_xpath(xp)

        # Username, Password & Captcha entry
        driver.find_element_by_xpath(uname_xp).send_keys(USERNAME)
        driver.find_element_by_xpath(pass_xp).send_keys(PASSWORD)
        driver.find_element_by_xpath(captch_xp).send_keys(captcha.text)

        # Login button
        xp = '//*[@id="xmlLogin"]'
        driver.find_element_by_xpath(xp).click()

        # Select 1-10 -> CCE results -> result Form
        xp = '/html/body/div[3]/div[2]/div/div[3]/table/tbody/tr/td/table/tbody/tr/td[2]/div/div[5]/img'
        driver.find_element_by_xpath(xp).click()
        xp = '/html/body/div[3]/div[2]/div/div[3]/table/tbody/tr/td/table/tbody/tr/td[1]/div/table/tbody/tr/td/table/tbody/tr/td/div[2]/ul/li[4]/a'
        element = driver.find_element_by_xpath(xp)
        element.click()
        sleep(1)
        xp = '/html/body/div[3]/div[2]/div/div[3]/table/tbody/tr/td/table/tbody/tr/td[1]/div/table/tbody/tr/td/table/tbody/tr/td/div[2]/ul/li[4]/ul/li[5]/a'
        element = driver.find_element_by_xpath(xp)
        element.click()
        sleep(1)
        xp = '/html/body/div[3]/div[2]/div/div[3]/table/tbody/tr/td/table/tbody/tr/td[1]/div/table/tbody/tr/td/table/tbody/tr/td/div[2]/ul/li[4]/ul/li[5]/ul/li[2]/a'
        element = driver.find_element_by_xpath(xp)
        element.click()

    def selectSection(self):
        # Select Academic year   xpath :- //*[@id="year"]
        xp = '//*[@id="year"]'
        element = driver.find_element_by_xpath(xp)
        select = Select(element)
        select.select_by_value(ACADEMIC_YEAR)
        sleep(2)

        # Select Medium  xpath :- //*[@id="stu_schoolmedium"]
        xp = '//*[@id="stu_schoolmedium"]'
        element = driver.find_element_by_xpath(xp)
        select = Select(element)
        select.select_by_value(MEDIUM)
        sleep(2)

        # Select Standard xpath :- //*[@id="std"]
        xp = '//*[@id="std"]'
        element = driver.find_element_by_xpath(xp)
        select = Select(element)
        select.select_by_value(STANDARD)
        sleep(2)

        # Select Exam xpath :- //*[@id="semester_id"]
        xp = '//*[@id="semester_id"]'
        element = driver.find_element_by_xpath(xp)
        select = Select(element)
        select.select_by_value(EXAM)
        sleep(2)

        # Select Exam xpath :- //*[@id="group"]
        xp = '//*[@id="group"]'
        element = driver.find_element_by_xpath(xp)
        select = Select(element)
        select.select_by_value(GROUP)
        sleep(2)

        # Search
        xp = '/html/body/div[3]/div[2]/div/div[3]/table/tbody/tr/td/table/tbody/tr/td[2]/div/form[1]/fieldset/table/tbody/tr[7]/td/input[1]'
        driver.find_element_by_xpath(xp).click()
        sleep(10)

    # Returns an array with all student names
    def getNames(self):
        print('Listing names...')
        count = 1
        #pre_xp = '/html/body/div[3]/div[2]/div/div[3]/table/tbody/tr/td/table/tbody/tr/td[2]/div/form[2]/div[3]/div[3]/table/tbody/tr['
        pre_xp = '/html/body/div[3]/div[2]/div/div[3]/table/tbody/tr/td/table/tbody/tr/td[2]/div/form[2]/div[3]/table/tbody/tr['
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
        print(names)
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
        #pre_xp = '/html/body/div[3]/div[2]/div/div[3]/table/tbody/tr/td/table/tbody/tr/td[2]/div/form[2]/div[3]/div[3]/table/tbody/tr['
        pre_xp = '/html/body/div[3]/div[2]/div/div[3]/table/tbody/tr/td/table/tbody/tr/td[2]/div/form[2]/div[3]/table/tbody/tr['
        mid_xp = ']/td['
        post_xp = ']'
        index += 1

        # English  xpath :-  //*[@id="firstl_id"] , col = 5
        self.selectGrade(index,marks[0],'5','.//*[@id="firstl_id"]','2,')

        # Hindi  xpath :-  //*[@id="secondl_id"]  , col = 6
        self.selectGrade(index,marks[1],'6','.//*[@id="secondl_id"]','14,')

        # Sanskrit  xpath :-  //*[@id="thirdl_id"] , col = 7
        self.selectGrade(index,-1,'7','.//*[@id="thirdl_id"]','23,Exempt')

        # Maths  xpath :-  //*[@id="sub0_id"] , col = 8
        self.selectGrade(index,marks[2],'8','.//*[@id="sub0_id"]','28,')

        # SocialScience  xpath  :- //*[@id="sub1_id"] , col = 9
        self.selectGrade(index,marks[3],'9','.//*[@id="sub1_id"]','30,')

        # Science  xpath  :- //*[@id="sub2_id"] , col = 10
        self.selectGrade(index,marks[4],'10','.//*[@id="sub2_id"]','31,')

    def selectGrade(self,index,mark,col,relative_xpath,dd_value):
        pre_xp = '/html/body/div[3]/div[2]/div/div[3]/table/tbody/tr/td/table/tbody/tr/td[2]/div/form[2]/div[3]/table/tbody/tr['
        mid_xp = ']/td['
        post_xp = ']'

        xp = pre_xp + str(index) + mid_xp + col + post_xp
        element = driver.find_element_by_xpath(xp)
        dropbox = element.find_element_by_xpath(relative_xpath)
        select = Select(dropbox)
        if mark == -1:
            value = dd_value
        else:
            value = dd_value + str(mark)
        select.select_by_value(value)

if __name__ == '__main__':
    Bot()
