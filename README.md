# react-suite-boilerplate

base code project for https://github.com/jerson/react-suite

![default view](https://github.com/jerson/react-suite-boilerplate/raw/master/docs/sample.png)


## install

    git clone https://github.com/jerson/react-suite-boilerplate
    cd react-suite-boilerplate
    yarn #or if you are old npm install
    

now you are ready for code

    yarn run build -- --watch #this compile tsx to js on change
    

## run on web
    
    yarn run start:web
    
## run on mobile

same as a normal react native project

    yarn start #start react-native packager
    yarn run android 
    yarn run ios 

## build on web
    
    yarn run build:web
    
## build on mobile

same as a normal react native project

     cd android && ./gradlew assembleRelease  
    