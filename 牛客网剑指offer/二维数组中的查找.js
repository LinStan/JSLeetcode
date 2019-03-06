function Find(target, array)
{
    // write code here
    let l = array.length;
    let h = array[0].length;
    for(let i = 0;i<l;i++)
    {
        for(let j =0;j<h;)
        {
            if(target>array[i][j])
            {
                j++;
            }
            else if(target==array[i][j])
            {return true}
            else
            {
                break;
            }
        }
    }
    return false
}