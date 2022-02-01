export function Entry(yourEntry){
  this.yourEntry=yourEntry;
}
Entry.prototype.numberOfWords=function(){
  let wordArray=[];
  wordArray = this.yourEntry.split(" ");
  return wordArray.length;
};
Entry.prototype.numberOfVowels=function(){
  const regex = /[aeiou]/gi;
  const vowelNum = this.yourEntry.match(regex).length;
  return vowelNum;

};
Entry.prototype.numberOfConsonants=function(){
  let consonantRegex = /[bcdfghjklmnpqrstvwxyz]/gi;
  const consoNum = this.yourEntry.match(consonantRegex).length;
  return consoNum;

};
Entry.prototype.getTeaser=function(){
  return "yet to write functionality";
};