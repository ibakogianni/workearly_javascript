const ids = new Set(['Hi','from','set!']);
ids.add(2);

if(ids.has('Hi')){
    ids.delete('Hi');
}

console.log(ids);
ids.entries()

for(const entry of ids.entries()){
    console.log(entry);
}
