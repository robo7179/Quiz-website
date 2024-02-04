import mysql.connector
def conctn():
    #ESTABLISHING SQL CONNECTION
    global mydb
    try:
        userName = "root"
        paSSword = "1234"
        mydb=mysql.connector.connect(host="localhost",user=userName,passwd=paSSword)
    except:
        print("INCORRECT USERNAME OR PASSWORD, TRY AGAIN")
        conctn()
#ESTABLISHING SQL CONNECTION
conctn()
dbcursor=mydb.cursor()
dbcursor.execute("create database if not exists mydb")
dbcursor.execute("use mydb")
dbcursor.execute("show tables")
a=0
#ESTABLISHED SQL CONNECTION
for i in dbcursor:
    if i==('users',):
        a=1
if a==0:
    dbcursor.execute("CREATE TABLE users (user_id  varchar(50) not NULL primary key,password varchar(50) not NULL, name varchar(50), school varchar (50),class int,testattempt int , accuracy float)")
    mydb.commit()
def insert(username,password):
    #TO INSERT NEW USERS INTO THE DATABASE
    #username and password are strings
    s=(username,password)
    #error if already exist
    dbcursor.execute("insert into users values(%s,%s,null,null,null,null,null)",s)
    #dbcursor.execute("insert into users values(%s,%s,null,null,null,null,null)",("srini","ohk"))
    #dbcursor.execute("insert into users values(%s,%s,null,null,null,null,null)",("abhinim","ohk1"))
    #dbcursor.execute("insert into users values(%s,%s,null,null,null,null,null)",("ppm","ohk2"))
    mydb.commit()
#insert("srini","ohk")
def maketest(f):
    #f=file object to write the questions and answers
    n=int(input("enter number of questions: "))
    for i in range(1,n+1):
        A=input("question type int -i , mcq- m: ")
        if (A=="m" or A=="M"):
            q="q"+str(i)+"m "
            q+=input("enter question: ")
            l=[]
            for j in range(4):
                o=input("enter option: "+str(j+1))
                l.append(o)
            q+=(str(l)+" ")
            q+="\n"
            f.write(q)
            a=int(input("enter answer number: "))
            f.write(str(a)+"\n")
        elif A=="i" or A=="I":
            q="q"+str(i)+"i "
            q+=input("enter question: ")
            a=int(input("enter answer: "))
            q+="\n"
            f.write(q)
            f.write(str(a)+"\n")



def user_name():
    
    u=input("enter username: ")
    p=str(input("enter password: "))
    dbcursor.execute("select password from users where user_id=%s",(u,))
    access=False
    for i in dbcursor:
        if (p==i[0]):
            access=True
    if (not (access)):
        print("wrong password/username")
        user_name()
    else:
        print("access granted")

#user_name()
#f=open("t2.txt",mode="w+")
#maketest(f)
#f.close()
def ev_test(test,ans=[]):
    #test=file of test
    #ans=list of answers
    l=test.readlines()
    #print(l)
    ans=list(map(int,input("enter answers").split()))
    n=len(ans)
    correct=[]
    for i in range(n):
        #print(l[2*i+1],ans[i])
        if ((str(ans[i])+"\n")==l[2*i+1]):
            correct.append(i+1)
    return correct
#test=open("t2.txt",mode="r")
#print(ev_test(test))
#test.close()
            
        
