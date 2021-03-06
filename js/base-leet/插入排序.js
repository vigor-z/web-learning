/*
    插入排序
    时间复杂度O(n^2)
    空间复杂度O(1)
*/
function insertSort(arr){
    var len=arr.length;
    var arr=arr.slice();
    for(var i=1;i<len;i++){
        var preIndex=i-1;
        var current=arr[i];
        while(preIndex>=0&&arr[preIndex]>current){
            arr[preIndex+1]=arr[preIndex]
            preIndex--;
        }
        arr[preIndex+1]=current;
    }
    return arr;
}
var arr=[22,33,11,2,1,2,34,1,222,3];
var sortArr=insertSort(arr);
console.log(sortArr)