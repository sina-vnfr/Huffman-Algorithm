const qss =(textuser)=>{

    var texts= textuser.split(" ").join("")

    var charCount = {}

    for(var i=0;i<texts.length;i++){
        var char = texts[i]
        if(charCount[char]){
            charCount[char]++
        }else{
            charCount[char] = 1
        }
    }
    const sortedObject = {}
    Object.keys(charCount).sort((a,b) => charCount[a]-charCount[b])
    .forEach(key =>{
        sortedObject[key] = charCount[key]
    })

    const keysOfObj =Object.keys(sortedObject)
    const values =[]
    for(let k in sortedObject){
        values.push(sortedObject[k])
    }
    console.log(values.length)
    console.log(keysOfObj)
    console.log(values)

    makeTree(values.length,keysOfObj,values)

}
class HuffmanNode
{
	constructor()
	{
		this.data = 0;
		this.c = '';
		this.left = this.right = null;
	}
}
const makeTree= (n,charArray,charfreq) =>{	
	
		let q = [];

		for (let i = 0; i < n; i++) {

			let hn = new HuffmanNode();

			hn.c = charArray[i];
			hn.data = charfreq[i];

			hn.left = null;
			hn.right = null;
			
			q.push(hn);
		}
        
		let root = null;
		q.sort(function(a,b){return a.data-b.data;});
		
		while (q.length > 1) {
		
			let x = q[0];
			q.shift();

			let y = q[0];
			q.shift();

			let f = new HuffmanNode();

			f.data = x.data + y.data;
			f.c = '-';
			f.left = x;
			f.right = y;
			root = f;
			q.push(f);
			q.sort(function(a,b){return a.data-b.data;});
		}

        function printCode(root,s)
        {
           
            if (root.left == null
                && root.right == null
                && (root.c).toLowerCase() != (root.c).toUpperCase()) {
       
                document.write(root.c + ":" + s+"<br>");
       
                return;
            }

            printCode(root.left, s + "0");
            printCode(root.right, s + "1");
        }
     printCode(root,"");
}	

var nl=prompt("give me text")
qss(nl)