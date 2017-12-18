

Poem.create(
	title: "The Visitor",
	content: "A ferret visited my house\nwith little tiny cymbals.\nI felt that I should pick him up\nbut couldn't find my thimbles.\nHe jumped into my dresser drawer\n(The one with rags and papers)\nI slammed it shut and taped it tight\nand gave it to the neighbors.\nThe neighbors liked the furniture\nbut did not like the ferret.\nThey took it to a hardware store\nto trade it for a parrot.\nThe parrot, now, it sings to me\nacross the narrow alley.\nI'd like to take it far away,\nBut it's too big to carry.\nIf animals come in your house\njust make them go away.\nYou can give them to your friends\nbut still you'll have to pay.",
	rating_count: 1000,
	total_rating: 2000
	)

Poem.create(
	title: "TOAST",
	content: "this is your mind.\nthis is your mind on TOAST.\nthis is your TOAST.\nThis is your toast on my mind.",
	rating_count: 1438,
	total_rating: 7000
	)

Poem.create(
	title: "Temptation",
	content: "I know how you so love\nthe chewy deliciousness of\na fresh, oatmeal raisin cookie.\nI know how you like the taste,\nthe mellow hints of butter,\nthe tangy burst of tiny fruits.\nI know how these circular delights\ntempt you so, how you searched for\nthem longingly at the bakery,\nat the grocery,\nat the coffee shop.\nI know all about your deep\naffections for the delectable treats.\nYet there is only one left on the\nplate, and I simply cannot help myself.",
	rating_count: 978,
	total_rating: 1439
	)


Poem.all.each do |poem|
	Comment.create(message: "breathtaking", poem: poem)
	Comment.create(message: "what a farce", poem: poem)
	Comment.create(message: "i'm not sure what this is about", poem: poem)
end