for line in open('world.txt'):
    parts = line.split(',')
    header = parts[0]
    header = header.replace('.', '')
    parts2 = parts[1].split(' ')
    other = parts2[0].rstrip('\n')
    print '%s,%s' % (header, other)
