# react-parcel-starter
Quick start latest react app with parcel, eslint, sass-lint, prettier, jest and enzyme. Easy setup and start coding

#### Getting Started
1.Clone react-parcel-starter Repository
```
git clone git@github.com:deepanrajkumar/react-parcel-starter.git
```

2.Use npm or yarn to install dependency
```
npm install
```

3.Run dev server
```
npm start
```

#### Server options
Run dev server with lint, test and local json server
```
npm run dev
```

Build app
```
npm run build
```

#### Best practices
Best practices uses custom script to deliver unified experience on all platform. Formatting, eslint, scss lint, scan and Test runs with same fixed configuration.
      
##### Code Commit
Auto code commit and pre commit check(format, lint, security and test)
```
git add .
npm run commit
```

Manual code commit and pre commit check(format, lint, security and test)
```
git add .
git commit --m "["story"]["Authors"] Commit message gose here"
```

Manually check code quality(format, lint, security and test) before push
```
npm run commit:check
```

##### Format, Lint, Scan and Test
Auto format code
```
npm run format
```

Check and fix js error using eslint
```
npm run eslint
npm run eslint:fix
```

Check and fix scss error using sass lint
```
npm run scss:lint
npm run scss:fix
```

Check for vulnerability
```
npm run scan
```

Run test and with options
```
npm run test
npm run test:watch
npm run test:coverage
npm run test:prod
```
##### Clean project untracked files
Remove directory and files
```
npm run clean:dist
npm run clean:all
```


