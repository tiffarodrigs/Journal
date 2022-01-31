import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import {Entry} from './journal.js';

$(document).ready(function(){
  $("#entryButton").click(function(event){
    event.preventDefault();
    const inputEntry= $("#entry").val();
    const entryObj= new Entry(inputEntry);
    const word = entryObj.numberOfWords();
    const vowels = entryObj.numberOfVowels();
    const consonants = entryObj.numberOfConsonants();
    $("#word").html(word);
    $("#vowels").html(vowels);
    $("#consonants").html(consonants);
  });
});