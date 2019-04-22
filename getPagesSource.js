function DOMtoString(document_root) {
    if (window.location.hostname == "www.diyetkolik.com")
    {
        let plus = '';
        let nut_kcal = document.getElementsByClassName("nut_kcal")[0].innerText;
        let calories = document.getElementsByClassName("nut_kcal_count")[0].innerText;

        let macro_classes = [
            'lbl_carb100',
            'calories',
            'lbl_prot100',
            'lbl_fat100',
            'lbl_lif100',
            'lbl_potassium100',
            'magnesium',
            'lbl_sodium100'
        ];

        let default_weight = nut_kcal.match(/\d+/);
        let default_calories = calories.match(/\d+/);
        let hundered_gram_calories = default_calories * 100.0 / default_weight;



        macro_classes.forEach(function(element) {
            if (element == "calories")
                plus += hundered_gram_calories + "\t";
            else if (element == "magnesium")
                plus += "0\t";
            else
                plus += document.getElementsByClassName(element)[0].innerText.replace(".", ",") + "\t";
        });

        return plus.replace(".", ",").slice(0, -1);
    }
    else if (window.location.hostname == "www.diyetasistan.com")
    {
        let plus = '';

        let macro_classes = [
            'lbl_carb',
            'lbl_kalori',
            'lbl_prot',
            'lbl_fat',
            'lbl_lif',
            'lbl_potassium',
            'lbl_magnezyum',
            'lbl_sodium',
            'lbl_seker',
            'lbl_vit_c'
        ];

        macro_classes.forEach(function(element) {
            plus += document.getElementsByClassName(element)[0].innerText.
            match(/[+-]?((\d+\.?\d*)|(\.\d+))+/)[0].toString().
            replace(".", ",") + "\t";
        });

        return plus.replace(".", ",").slice(0, -1);
    }

    // TODO: Magnesium
    // TODO: Wikipedia parsing

    return 'Use www.diyetkolik.com';
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});