import os
import glob

all_projects = []

template = """\
            <h4><a class="mysub" style="text-decoration:none;color:blue" href="{}" target="_blank">
            <strong> {} </strong></a></h4>
"""

folders = []
for html in glob.glob('*/*.html'):
    folder = html.split('/')[0]
    folders.append(folder)

folders = list(set(folders))
for folder in folders:
    head = "            Project: {}".format(folder)
    tail = """\


            <br />
            <br />"""
    one_project = []
    for html in sorted(glob.glob(folder + '/*.html')):
        base = html.split('/')[1].rstrip('.html')
        out = template.format(folder,base)
        one_project.append(out)
    one_project = head + '\n' + '\n'.join(one_project) + tail
    all_projects.append(one_project)

all_projects = '\n'.join(all_projects)

# write output
with open('output.html','w') as fo:
    fo.write(all_projects)