import * as Constants from "../../constants";

function rename(obj, direction) {
    let newNameObj = {};
    let allName = Object.keys(obj);
    for (let i = 0; i < Object.keys(obj).length; i++) {
        let name = allName[i];
        newNameObj[direction[name]] = obj[allName[i]];
    }
    return newNameObj
}

export default function renameKeys (obj, reverse) {
if (reverse){
    let renameObject =  rename(obj, Constants.REVERSEKEYSMAP);
    return renameObject;
}else {
    let newArrAllEvents = [];
    for (let i = 0; i < Object.keys(obj).length; i++) {
        newArrAllEvents.push(rename(obj[i], Constants.KEYSMAP));
    }
    return newArrAllEvents
}
};

