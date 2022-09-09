import sys;
import os;
import re;

# define file content
sys.path.append('init/')
sys.path.append('init/css')

from variables import variables;
from template import template;
from style import style;

# definition function
def normalize(match):
    char = match[0];
    return char.upper() if char[0] != '-' else char[1].upper();

# def system variable
os.chdir('./src');
root = os.getcwd();
rootLevel = len(root.split('\\'));

tree = os.walk(root);
for node in tree:
    # level offest
    level = len(node[0].split('\\')) - rootLevel;

    # standard constants
    files = node[2];
    dirs = node[1];
    path = node[0];

    # additional
    paths = path.split('\\');
    nameDir = paths[-1];

    # check zero, first and second levels
    if (level == 0):
        if ('_variables.scss' not in files):
            file = open('%s\%s' % (path, '_variables.scss'), 'w');
            file.write(variables);
            file.close();

        if ('style.scss' not in files):
            file = open('%s\%s' % (path, 'style.scss'), 'w');
            file.write(style);
            file.close();

    if ("data" in paths):
        continue;

    if ("stores" in paths):
        continue;

    if (level == 1):
        if (nameDir+'.scss' not in files):
            file = open('%s\%s' % (path, '_' + nameDir + '.scss'), 'w');
            file.write(template % nameDir);
            for dir in dirs:
                file.write('@import "%s/%s";\n' % (dir, dir))
            file.close();
        else:
            file = open('%s\%s' % (path, nameDir + '.scss'), 'r');
            lines = file.readlines();
            matches = [];

            file = open('%s\%s' % (path, nameDir + '.scss'), 'w');
            re_import = re.compile('^\@import \"([^\\]+)\\([^\"]+)\";');
            for line in lines:
                res_import = re_import.search(line);
                if (res_import == None):
                    file.write(line);
                    continue;
                name_dir = res_import.group(2);
                if (name_dir in dirs):
                    file.write(line);
                    matches.append(name_dir);
            file.close();

            dirs_diff = list(set(dirs) - set(matches))
            if (len(dirs_diff) > 0):
                file = open('%s\%s' % (path, nameDir + '.scss'), 'a+');
                for dir in dirs_diff:
                    file.write('@import "%s/%s";\n' % (dir, '_' + dir))
                file.close();


    if (level > 1):
        prefixSCSS = '_' if level == 2 else '_';
        # parts of name
        parts = paths[rootLevel + 2 - 1:];
        partsUpper = map(lambda part: part[0].upper() + part[1:], parts);

        # filenames
        fileName = ''.join(parts);
        SCSS = prefixSCSS + fileName + '.scss';
        JSX = fileName + '.js';

        # name of css class
        cssClass = fileName;

        # create files
        if (SCSS not in files):
            file = open('%s\%s' % (path, SCSS), 'w');
            file.write(template % cssClass);
            for dir in dirs:
                file.write('@import "%s/%s";\n' % (dir, '_' + fileName + dir))
            file.close();
        else:
            file = open('%s\%s' % (path, SCSS), 'r');
            lines = file.readlines();
            matches = [];

            file = open('%s\%s' % (path, SCSS), 'w');
            re_import = re.compile('^\@import \"([^\\]+)\\([^\"]+)\";');
            for line in lines:
                res_import = re_import.search(line);
                if (res_import == None):
                    file.write(line);
                    continue;
                name_dir = res_import.group(1);
                if (name_dir in dirs):
                    file.write(line);
                    matches.append(name_dir);
            file.close();

            dirs_diff = list(set(dirs) - set(matches))
            if (len(dirs_diff) > 0):
                file = open('%s\%s' % (path, SCSS), 'a+');
                for dir in dirs_diff:
                    file.write('@import "%s/%s";\n' % (dir, '_' + fileName + dir))
                file.close();
