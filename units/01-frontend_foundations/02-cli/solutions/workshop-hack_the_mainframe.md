# Hack the Mainframe

## Find the restaurant

1. `cd restaurants` and `ls` to see list of restaurants.
2. `cd fork_and_branch`
3. `ls` will show Alice and Bob.

The name of the restaurant is `fork_and_branch`.

## Scan employee badges

1. In `fork_and_branch`, `cat alice` shows `XXXXXXXXXXXXXXXXXXXXXX`.
2. `cat carter` shows `4639622134`.

The ID is `4639622134`.

## Find the password

1. From `fork_and_branch`, `cd ../../emptystack` to go to `emptystack`.
2. `ls` shows `accounts.txt` and `mainframe.js`.
3. `cat accounts.txt` will output a long list of credentials.
4. `cat accounts.txt | grep 4639622134` will output `ID: 4639622134  Username: carter        Password: password123`.

The username is `carter` and the password is `password123`.

## Access the account

1. In `emptystack`, `node mainframe.js` will prompt for a username and password.
2. Enter `carter` and `password123`.
3. A welcome message will be displayed. `projects.txt` will be created.

## Stop the project

1. `cat accounts.txt | grep admin` will output `ID: 2315812165  Username: admin Password: correcthorsebatterystaple`.
2. `cat projects.txt | grep LAKE` will output `Code: LAKE      ID: 6002498754`
3. `node mainframe -stop` will prompt for admin credentials and project ID.
4. Enter username: `admin` and password: `correcthorsebatterystaple`.
5. Enter `6002498754` for project ID.
6. A status message indicating the project has been stopped will be displayed.
