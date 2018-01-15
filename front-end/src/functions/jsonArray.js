export function deleteFromJsonArray(jArray, id)
{
    var newArray= [];
    for(var i=0 ; i<jArray.length;i++)
    {
        var temp = jArray[i];
        if(temp.id !== id)
        {
            newArray.push(jArray[i])
        }
    }
    return newArray;
}

// old array: full array
// current array: array with deleted elements
// id of element to restore
export function backToJsonArray(oldArray,currentArray,id)
{
    var arrayDiffLength = oldArray.length - currentArray.length;
    var newArray;
    newArray = currentArray;
    var index;
    var element;
    //get position from oldArray
    for(var i=0 ; i<oldArray.length;i++)
    {
        var temp = oldArray[i];
        if(temp.id === id)
        {
            element =temp;
            index=i;
            break;
        }
    }
    if(index < arrayDiffLength)
    {
        index = arrayDiffLength;
    }
    newArray.splice(index - arrayDiffLength +1,0,element);
    return newArray;
}