describe("DuplicateChecker",function(){
	describe("DuplicatesFound", function () {

		describe("Given no argument",function(){
			it("Should return true", function() {
				// arrange
				let duplicateChecker = new DuplicateChecker();

				// act
				let actual = duplicateChecker.DuplicatesFound();

				// assert
				const expected = false;
				expect(actual).toBe(expected);
			});
		})

		describe("Given 4 arguments with duplicates",function(){
			it("Should return true", function() {
				// arrange
				let duplicateChecker = new DuplicateChecker();

				// act
				let actual = duplicateChecker.DuplicatesFound(1,2,3,2);

				// assert
				const expected = true;
				expect(actual).toBe(expected);
			});
		})

		describe("Given 3 arguments with no duplicates",function(){
			it("Should return true", function() {
				// arrange
				let duplicateChecker = new DuplicateChecker();

				// act
				let actual = duplicateChecker.DuplicatesFound(1, 2, 3);

				// assert
				const expected = false;
				expect(actual).toBe(expected);
			});
		})

		
		describe("Given 1 argument",function(){
			it("Should return false", function() {
				// arrange
				let duplicateChecker = new DuplicateChecker();

				// act
				let actual = duplicateChecker.DuplicatesFound(1);

				// assert
				const expected = false;
				expect(actual).toBe(expected);
			});
		})

	});
})

