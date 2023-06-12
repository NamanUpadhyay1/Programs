#  Q. Write a Python program to print all even numbers from a given list of numbers in the same order and stop printing any after 237 in the sequence.

# numbers = [    
#     386, 462, 47, 418, 907, 344, 236, 375, 823, 566, 597, 978, 328, 615, 953, 345, 
#     399, 162, 758, 219, 918, 237, 412, 566, 826, 248, 866, 950, 626, 949, 687, 217, 
#     815, 67, 104, 58, 512, 24, 892, 894, 767, 553, 81, 379, 843, 831, 445, 742, 717, 
#     958,743, 527
#     ]
# for x in numbers:
#     if x == 237:
#         print(x)
#         break;
#     elif x % 2 == 0:
#         print(x)

# Q. Write a Python program that prints out all colors from color_list_1 that are not present in color_list_2.

# color_list_1 = set(["White", "Black", "Red"])
# color_list_2 = set(["Red", "Green"])
# print("Original set elements:")
# print(color_list_1)
# print(color_list_2)
# print("\nDifferenct of color_list_1 and color_list_2:")
# print(color_list_1.difference(color_list_2))
# print("\nDifferenct of color_list_2 and color_list_1:")
# print(color_list_2.difference(color_list_1))

# Q. Write a Python program to find Area of a triangle

# base = int(input("Input the base : "))
# height = int(input("Input the height : "))

# area = base*height/2

# print('area = ', area)

# Q. Write a Python program to sum three given integers. However, if two values are equal, the sum will be zero.

# def sum_three(a, b, c):
#     if a == b or b == c or a==c:
#         sum = 0
#     else:
#         sum = a + b + c
#     return sum
# print(sum_three(2, 1, 2))
# print(sum_three(3, 2, 2))
# print(sum_three(2, 2, 2))
# print(sum_three(1, 2, 3))

# Q. Write a Python program to sum two given integers. However, if the sum is between 15 and 20 it will return 20.

# def numbers(a,b):
#     sum = a+b
#     if sum in range(15, 20):
#         return 20
#     else:
#         return sum
    
# print(numbers(15,1))

# Q. Write a Python program to add two objects if both objects are integers.

# def add_numbers(a, b):
#    if not (isinstance(a, int) and isinstance(b, int)):
#        return "Inputs must be integers!"
#    return a + b
# print(add_numbers(10, 20))
# print(add_numbers(10, 20.23))
# print(add_numbers('5', 6))
# print(add_numbers('5', '6'))

# Q. Write a Python program that displays your name, age, and address on three different lines.

# def personal_details():
#     name, age = "Simon", 19
#     address = "Bangalore, Karnataka, India"
#     print("Name: {}\nAge: {}\nAddress: {}".format(name, age, address))
# personal_details()

# Q. Write a Python program to convert all units of time into seconds.

days = int(input("Input days: ")) * 3600 * 24
hours = int(input("Input hours: ")) * 3600
minutes = int(input("Input minutes: ")) * 60
seconds = int(input("Input seconds: "))

time = days + hours + minutes + seconds

print("The amounts of seconds : ", time)