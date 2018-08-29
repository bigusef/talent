# Talent
this Django app With ReactJS integration

### Used Tech
- Python 3
- Django 2
- Django Restful Framework
- ReactJS
- SCSS
- Bootstrap
- SQLite


### To Run Applcation on local machine

```
$ cd path/to/your/dev/folder
$ mkdir talents
$ cd talents
$ python3 -m venv .env
$ source .env/bin/active
$ git clone git@github.com:mudyou/Talent.git .
$ pip install -r requirements.txt
```

* Need to add local.py file to hoald local settings
```
$ cd talents/settings
$ touch local.py
```

* add this line to local.py
```
from .base import *

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'bundles/',
        'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.dev.json'),
    }
}
```

* then migrate and create super user
```
$ python manage.py makemigrations
$ python manage.py migrate
$ python manage.py createsuperuser
$ python manage.py runserver
```

* then on open another terminal tap
```
$ cd path/to/your/dev/folder
$ cd talents
$ cd frontend
$ yarn install
$ yarn start
```

### Applcation Path

```
API Path:           'http://127.0.0.1:8000/api/'
Admin Path:         'http://127.0.0.1:8000/admin/'
React App Path:     'http://127.0.0.1:8000/'
```

### To Publish App Online

```
```
