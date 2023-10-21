def can_make_equal_length_threadlets(a, b, c):
    # Sort the threadlet lengths
    threadlets = [a, b, c]
    threadlets.sort()

    # Check if it's possible to distribute the differences evenly
    if threadlets[0] == threadlets[1] and threadlets[1] == threadlets[2]:
        return "YES"
    if threadlets[0] == threadlets[1]:
        diff = threadlets[2] - threadlets[0]
        if diff % 2 == 0:
            return "YES"
    if threadlets[1] == threadlets[2]:
        diff = threadlets[1] - threadlets[0]
        if diff % 2 == 0:
            return "YES"

    return "NO"

# Input
t = int(input())
results = []

for _ in range(t):
    a, b, c = map(int, input().split())
    result = can_make_equal_length_threadlets(a, b, c)
    results.append(result)

# Output
for result in results:
    print(result)
