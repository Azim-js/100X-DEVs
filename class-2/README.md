# Bash and Terminal commands

```
1. pwd
2. cd
3. ls
4. mkdir
5. touch
6. cat
7. vi
8. mv
9. cp
10. grep
11. nvm
12. npm 
13. node
14. git
```

1. nvm (node version manager lets you isntall node in machine) 
2. ls -R (For sub dir), ls -lT (list of dir and what was last modified) , ls -r (for rverse order of the files) , ls -s (for dir size)
3. ls to find files , ls -lR | grep *.json
4. ls Zoo* (wildcards)
5. ls ..
6. cat (to view you files)
7. create a new file via touch and add content using cat  >, >> (output operator)
8. mkdir for new dir 
9. chmod ugo+,-rwx 

```
r (read): 4
w (write): 2
x (execute): 1
0 = ---

1 = --x

2 = -w-

3 = -wx

4 = r-

5 = r-x

6 = rw-

7 = rwx

```

10. head -20 newfile.txt
11. pipe -> command 1 | command 2 
12. tail -n +25 newfile.txt | head -5 newfile.txt 
13. wc newfile.txt , no lines , no of words , no of characters
14. grep "one" newfile.txt | wc -l
25. grep is used to find patterns in certain dir
26. grep -c "one" newfile.txt
27. grep -hir "one" newfile.txt (for matching lines )
28.  -hirw (w is for words, r is recursive, c for counts )
29. bash script.sh to run the script
30. wget -> world wide web get , curl -> client URL 
31. sed -> stream editor for subsitution 
32. awk -> script within 

# Examples

# GREP

33. grep "ERROR" log.txt 
34. grep -v "INFO" log.txt (-v to omit)
35. grep -A 5 ERROR log.txt (-A for after)
36. grep -B 5 ERROR log.txt (-B for before)
37. grep -c 5 ERROR log.txt (-C for before and after)


# SED

38. sed [OPTIONS] SCRIPT FILE ...

The sed's subsitute command has the following structure:

```
1. sed 's/ERROR/CRITICAL/' log.txt
2. sed -ibackup 's/ERROR/CRITICAL/' log.txt (creates a logbackup.txt)
3. sed '3 s/ERROR/CRITICAL/' log.txt
4. sed '3,5 s/ERROR/CRITICAL/' log.txt
5. sed -n '3,/ERROR/ p' log.txt
```




