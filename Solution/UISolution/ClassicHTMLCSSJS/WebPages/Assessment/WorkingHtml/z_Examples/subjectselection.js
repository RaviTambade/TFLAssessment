// Store all selected questions
let selectedQuestionsStore = new Set();

// ---------------- SUBJECT CLICK -----------------
$('input[name="subject"]').change(function () {
    let subject = $(this).val();
    let concepts = data[subject].concepts;

    $("#conceptList").empty();
    $("#questionList").empty();
    $("#selectedList").empty();

    // Reset selection
    selectedQuestionsStore.clear();

    $("#questionBox").addClass("hidden");

    // Fill concepts
    $.each(concepts, function (concept, questions) {
        $("#conceptList").append(`
            <label class="flex items-center gap-2">
                <input type="checkbox" class="concept h-4 w-4 text-blue-600" value="${concept}">
                <span>${concept}</span>
            </label>
        `);
    });

    $("#conceptBox").hide().removeClass("hidden").slideDown(300);
});

// ---------------- CONCEPT CLICK -----------------
$(document).on("change", ".concept", function () {
    let subject = $('input[name="subject"]:checked').val();
    let selectedConcepts = $(".concept:checked");

    $("#questionList").empty();

    if (selectedConcepts.length === 0) {
        $("#questionBox").addClass("hidden");
        return;
    }

    // Rebuild question list BUT preserve checked state
    selectedConcepts.each(function () {
        let concept = $(this).val();
        let questions = data[subject].concepts[concept];

        $("#questionList").append(`<h3 class="font-semibold text-blue-700">${concept}</h3>`);

        questions.forEach(q => {
            let alreadyChecked = selectedQuestionsStore.has(q) ? "checked" : "";

            $("#questionList").append(`
                <label class="flex items-center gap-2 ml-4">
                    <input type="checkbox" class="question h-4 w-4 text-green-600" value="${q}" ${alreadyChecked}>
                    <span>${q}</span>
                </label>
            `);
        });
    });

    $("#questionBox").hide().removeClass("hidden").slideDown(300);
});

// ---------------- QUESTION CLICK -----------------
$(document).on("change", ".question", function () {
    let question = $(this).val();

    if (this.checked) {
        selectedQuestionsStore.add(question);
    } else {
        selectedQuestionsStore.delete(question);
    }

    // Update selected list
    $("#selectedList").empty();
    selectedQuestionsStore.forEach(q => {
        $("#selectedList").append(`<li>${q}</li>`);
    });
});
