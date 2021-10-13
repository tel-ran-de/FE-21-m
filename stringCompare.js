const strings = [{str:"hello"}, {str:'world'}, {str:'i'}, {str: 'bingo'}, {str: 'batman'} ]

console.log( strings.sort( (a,b) => a.str.localeCompare(b.str) ) )