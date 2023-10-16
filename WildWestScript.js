// script.js

// Function to reset attribute percentages
function resetAttributes() {
  console.log("Resetting attributes...");
  localStorage.setItem('Compassion', 0);
  localStorage.setItem('Wisdom', 0);
  localStorage.setItem('Faith', 0);
}

  
// Function to update attribute percentages based on selected option and attribute mapping
function updateAttributes(selectedOption, attributeMapping) {
    const attribute = attributeMapping[selectedOption];
    const currentPercentage = parseFloat(localStorage.getItem(attribute) || 0);
    localStorage.setItem(attribute, currentPercentage + 25);
  }
  
  function checkOption(radioName, nextPageUrl, attributeMapping) {
    const radios = document.getElementsByName(radioName);
    let selected = false;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selected = true;
            // Save the selected value to localStorage
            updateAttributes(radios[i].value, attributeMapping);
            break;
        }
    }

    if (selected) {
        window.location.href = nextPageUrl;
    } else {
        if (currentLanguage === 'en') {
            alert('Please select an option before moving to the next question.');
        } else {
            alert('在进入下一个问题之前，请选择一个选项。');
        }
    }
}


// Function to show final results 
function showResults() {
    const compassion = parseFloat(localStorage.getItem('Compassion') || 0);
    const wisdom = parseFloat(localStorage.getItem('Wisdom') || 0);
    const faith = parseFloat(localStorage.getItem('Faith') || 0);
  
    const resultsDiv = document.getElementById('results');
    
    if (currentLanguage === 'en') {
      resultsDiv.innerHTML = `Your attributes are: ${compassion}% Compassion, ${wisdom}% Wisdom, ${faith}% Faith.`;
    } else {
      resultsDiv.innerHTML = `你的属性是：${compassion}% 同情心，${wisdom}% 智慧，${faith}% 信仰。`;
    }
  }
  