/* Som matematikstuderande,
vill jag kunna g�ra repetitiva �vningar i ekvationsl�sning,
s� att jag kan f�rb�ttra min s�kerhet och f�rst�else i matematik. */

describe("Exercises", function() {
	
	it("should give instructions", function() {
		expect(isEmpty($('.iwm_instructions'))).toBeFalsy();
	});
	
	it("should allow input answer", function() {
		expect(exists($('input.iwm_answer'))).toBeTruthy();
	});
	
	it("should give feedback when given answer", function() {
		
		describe("Exercises", function() {
			
			it("should output correct when given correct answer", function() {
				inputAnswer(WebMath.getAnswer());
				expect($('.iwm_feedback').text()).toEqual("Correct!");
			});
			
			it("should output incorrect when given incorrect answer", function() {
				inputAnswer(incorrectAnswer());
				expect($('.iwm_feedback').text()).toEqual("Incorrect!");
			});
		});
	});
	
	it("should give exercises", function() {
		
		describe("Exercises", function() {
			it("should be in the form a + b = 0", function() {
				expect($('.iwm_instructions').text()).toMatch(/\b[a-z] [\+\-] [1-9][0-9]* = 0/);
			});
			
			it("should be in the form a + b = c", function() {
				expect($('.iwm_instructions').text()).toMatch(/\b[a-z] [\+\-] [1-9][0-9]* = [1-9]*/);
			});
		});
	});
	
	/* a - b = 0 */
	/* a + b = c */
	/* a - b = c */
	/* ax = c */
	/* ax + b = 0 */
	/* ax + b = c */
});

function inputAnswer(ans) {
	$('.iwm_answer').val(ans);
	$('.iwm_submit').click();
}

function incorrectAnswer() {
	var ans = 0;
	while(ans == WebMath.getAnswer()) {
		ans = Math.random();
	}
	return ans;
}
