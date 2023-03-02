a=0
b=1
n=int(input('Enter the range'))
fib = 0
for i in range(n):
    print(fib, end=' ')
    a=b
    b=fib
    fib=a+b
