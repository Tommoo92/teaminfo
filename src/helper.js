
export function setClassColor(classColors){

    if(classColors != null){
        var colorArray = classColors.split('/');
        var readyArray = [];
        colorArray.forEach(element => {
            element = element.trim();
            element = element.toLowerCase();
            readyArray.push(element);
        });
    
        var res =readyArray.join().replace(',',' ');
    
        return res;
    }

    return '';
}

