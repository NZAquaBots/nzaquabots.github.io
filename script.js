// Language detection
const LANG = document.documentElement.lang || 'en';

// Translation helper
const i18n = {
    encouragements: {
        en: [
            "Great job! You're off to a fantastic start! 🚀",
            "Awesome work! Keep it up! 💪",
            "You're doing amazing! 🌟",
            "Excellent progress! You're a natural! 🎯",
            "Fantastic! You're really getting the hang of this! ⚡",
            "Outstanding work! Keep going! 🏆",
            "You're crushing it! Almost there! 🔥",
            "Incredible job! You're so close! 🎊",
            "Amazing work! Just a few more steps! 🚀",
            "You're unstoppable! Keep it up! 💫"
        ],
        mi: [
            "He rawe tō mahi! He tīmatanga pai tēnei! 🚀",
            "Ka mau te wehi! Kia kaha tonu! 💪",
            "Kei te tino pai tō mahi! 🌟",
            "He pai te kauneke! He māmā noa iho mōu tēnei! 🎯",
            "Tūmeke! Kei te mārama haere koe! ⚡",
            "He mahi whakahirahira! Haere tonu! 🏆",
            "Autaia o mahi! Tata oti! 🔥",
            "Ka mau te wehi! Kua tata rawa koe! 🎊",
            "He mahi pai! He torutoru noa ngā ūpane e toe ana! 🚀",
            "Kāore e taea te aukati i a koe! Haere tonu! 💫"
        ]
    },
    milestones: {
        en: {
            5: "🎉 Quarter way there! You're doing great!",
            10: "🌟 Halfway point! You're amazing!",
            15: "🚀 Three quarters done! Almost there!",
            20: "🏆 So close to the finish line!",
            26: "🎊 CONGRATULATIONS! You've built your AquaBot controller!"
        },
        mi: {
            5: "🎉 Kua tae ki te wahanga hauwhā! Ka rawe o mahi!",
            10: "🌟 Kua tae ki te wahanga haurua! Autaia koe!",
            15: "🚀 Kua tae ki te wahanga toru hauwhā! Tata oti!",
            20: "🏆 Kua tata ki te rārangi whakamutunga!",
            26: "🎊 HŪRŌ! Kua oti i a koe te hanga i tō roumamao AquaBot!"
        }
    },
    strings: {
        en: {
            testCompleted: (n) => `Test ${n} completed! 📋`,
            testPassed: (n) => `Great! Test ${n} passed! ✅`,
            testNeedsAttention: (n) => `Test ${n} needs attention. Let's troubleshoot! 🔧`,
            buildComplete: "🎯 Build complete! Now let's test your controller to make sure it works perfectly!",
            allTestsPassed: "🎉 Congratulations! You've completed all the build steps! Time to test your controller!",
            troubleshoot: "Let's troubleshoot the issue! 🔧",
            confirmStartAgain: "Are you sure you want to start again? This will reset all your progress.",
            startingFresh: "🔄 Starting fresh! Let's build your AquaBot controller!",
            issueFixed: (n) => `Issue ${n} fixed! Great work! 🔧`,
            retesting: "Let's test your controller again! 🔄",
            missionTitle: "Mission Accomplished!",
            missionBody: "Your AquaBot controller is built AND tested! You're now ready to explore the underwater world! 🌊",
            missionButton: "Ready to Dive! 🚀",
            confirmReset: "Are you sure you want to reset all progress?",
            progressReset: "Progress reset! Ready to start fresh! 🔄",
            progressStatus: (n) => `Progress: ${n} steps completed! 📊`,
            choiceSpade: "Great choice! Spade connectors provide a secure connection! 🔌",
            choiceCroc: "Excellent! Croc clips are easy to use and swap! 🐊",
            markComplete: '<i class="fas fa-check"></i> Mark Complete',
            completed: '<i class="fas fa-check-circle"></i> Completed!',
            fixedIssue: '<i class="fas fa-check"></i> Fixed This Issue',
            fixedDone: '<i class="fas fa-check-circle"></i> Fixed!',
            testComplete: '<i class="fas fa-check"></i> Test Complete',
            testCompleteDone: '<i class="fas fa-check-circle"></i> Completed!'
        },
        mi: {
            testCompleted: (n) => `Kua oti te whakamātau ${n}! 📋`,
            testPassed: (n) => `Ka pai! Kua angitu te whakamātau ${n}! ✅`,
            testNeedsAttention: (n) => `Me aro atu ki te whakamātau ${n}. Me raparongoā tātou! 🔧`,
            buildComplete: "🎯 Kua oti te hanga! Ināianei, whakamātauhia tō roumamao kia tika pai ai te mahi!",
            allTestsPassed: "🎉 Hūrō! Kua oti i a koe ngā ūpane hanga katoa! Kua tae te wā ki te whakamātau i tō roumamao!",
            troubleshoot: "Me raparongoā te raruraru! 🔧",
            confirmStartAgain: "Kei te tino hiahia koe ki te tīmata anō? Ka tautuhi anō tēnei i tō kauneke katoa.",
            startingFresh: "🔄 Ka tīmata hou! Me hanga tō roumamao Karetao Hiko Rukuwai!",
            issueFixed: (n) => `Kua whakatikahia te raruraru ${n}! Ka pai tō mahi! 🔧`,
            retesting: "Me whakamātau anō i tō roumamao! 🔄",
            missionTitle: "Kua tutuki te kaupapa!",
            missionBody: "Kua hanga, kua whakamātau hoki tō roumamao Karetao Hiko Rukuwai! Kua rite koe ki te torotoro i te ao o raro i te wai! 🌊",
            missionButton: "Kua rite ki te ruku! 🚀",
            confirmReset: "Kei te tino hiahia koe ki te tautuhi anō i tō kauneke katoa?",
            progressReset: "Kua tautuhi anō te kauneke! Kua rite ki te tīmata hou! 🔄",
            progressStatus: (n) => `Kauneke: ${n} ngā ūpane kua tūtuki! 📊`,
            choiceSpade: "He kōwhiringa pai! He hononga pūmau ngā hononga pūhiko! 🔌",
            choiceCroc: "Ka pai! He ngāwari te whakamahi me te whakawhiti i ngā kōkiri croc! 🐊",
            markComplete: '<i class="fas fa-check"></i> Kua tūtuki',
            completed: '<i class="fas fa-check-circle"></i> Kua tūtuki!',
            fixedIssue: '<i class="fas fa-check"></i> Kua whakatikahia tēnei raruraru',
            fixedDone: '<i class="fas fa-check-circle"></i> Kua whakatika!',
            testComplete: '<i class="fas fa-check"></i> Kua Oti te Whakamātau',
            testCompleteDone: '<i class="fas fa-check-circle"></i> Kua tūtuki!'
        }
    }
};

function t(key, ...args) {
    const val = i18n.strings[LANG]?.[key] ?? i18n.strings.en[key];
    return typeof val === 'function' ? val(...args) : val;
}

// Progress tracking and interactive functionality
let completedSteps = new Set();
let totalSteps = 19; // Total number of steps (16 PCB steps + 2 connection steps + 1 testing completion)

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeSteps();
    updateProgress();
    loadProgress();
});

// Initialize step functionality
function initializeSteps() {
    const stepCards = document.querySelectorAll('.step-card');
    
    stepCards.forEach(card => {
        const header = card.querySelector('.step-header');
        
        // Add click event to toggle step content
        header.addEventListener('click', function() {
            toggleStep(card);
        });
        
        // Expand first step by default
        if (card.dataset.step === '1') {
            card.classList.add('expanded');
        }
    });
}

// Toggle step expansion
function toggleStep(stepCard) {
    stepCard.classList.toggle('expanded');
    
    // Smooth scroll to step if expanding
    if (stepCard.classList.contains('expanded')) {
        setTimeout(() => {
            stepCard.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest' 
            });
        }, 100);
    }
}

// Complete a step
function completeStep(stepNumber) {
    const stepCard = document.querySelector(`[data-step="${stepNumber}"]`);
    const button = stepCard.querySelector('.btn-complete');
    
    if (!completedSteps.has(stepNumber)) {
        // Mark step as completed
        completedSteps.add(stepNumber);
        stepCard.classList.add('completed');
        
        // Update button
        button.innerHTML = t('completed');
        button.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
        
        // Add celebration effect
        createCelebration(stepCard);
        
        // Auto-expand next step
        expandNextStep(stepNumber);
        
        // Update progress
        updateProgress();
        
        // Save progress
        saveProgress();
        
        // Show encouraging message
        showEncouragement(stepNumber);
    } else {
        // Unmark step (allow toggling)
        completedSteps.delete(stepNumber);
        stepCard.classList.remove('completed');
        
        button.innerHTML = t('markComplete');
        button.style.background = 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)';
        
        updateProgress();
        saveProgress();
    }
}

// Create celebration effect
function createCelebration(stepCard) {
    const celebration = document.createElement('div');
    celebration.innerHTML = '🎉';
    celebration.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 2rem;
        animation: celebrationBounce 1s ease-out;
        pointer-events: none;
        z-index: 1000;
    `;
    
    stepCard.style.position = 'relative';
    stepCard.appendChild(celebration);
    
    // Add animation keyframes if not already added
    if (!document.querySelector('#celebrationStyle')) {
        const style = document.createElement('style');
        style.id = 'celebrationStyle';
        style.textContent = `
            @keyframes celebrationBounce {
                0% { transform: scale(0) rotate(0deg); opacity: 0; }
                50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
                100% { transform: scale(1) rotate(360deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Remove celebration after animation
    setTimeout(() => {
        celebration.remove();
    }, 1000);
}

// Expand next step automatically
function expandNextStep(currentStep) {
    // Special case: After step 16, scroll to connection choice section
    if (currentStep === 16) {
        setTimeout(() => {
            const connectionSection = document.querySelector('.connection-options');
            if (connectionSection) {
                connectionSection.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest' 
                });
            }
        }, 800);
        return;
    }
    
    // Special case: After connection steps (21 for spade, 26 for croc), scroll to testing section
    if (currentStep === 21 || currentStep === 26) {
        setTimeout(() => {
            const testingSection = document.getElementById('testing-section');
            if (testingSection) {
                testingSection.style.display = 'block';
                testingSection.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest' 
                });
            }
        }, 800);
        return;
    }
    
    const nextStepCard = document.querySelector(`[data-step="${currentStep + 1}"]`);
    if (nextStepCard && !nextStepCard.classList.contains('expanded')) {
        setTimeout(() => {
            nextStepCard.classList.add('expanded');
            nextStepCard.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest' 
            });
        }, 600);
    }
}

// Update progress bar
function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const progressPercent = document.getElementById('progressPercent');
    const startAgainBtn = document.getElementById('startAgainBtn');
    
    // Calculate progress - only count steps that contribute to completion
    let adjustedCompletedSteps = 0;
    
    // Count PCB steps (1-16)
    for (let i = 1; i <= 16; i++) {
        if (completedSteps.has(i)) {
            adjustedCompletedSteps++;
        }
    }
    
    // Count connection steps - only the chosen path (either spade OR croc, not both)
    let spadeStepsCompleted = 0;
    let crocStepsCompleted = 0;
    
    // Count spade steps (17-21)
    for (let i = 17; i <= 21; i++) {
        if (completedSteps.has(i)) {
            spadeStepsCompleted++;
        }
    }
    
    // Count croc steps (22-26)
    for (let i = 22; i <= 26; i++) {
        if (completedSteps.has(i)) {
            crocStepsCompleted++;
        }
    }
    
    // Only count the path that has been chosen (whichever has more progress)
    if (spadeStepsCompleted > 0 && crocStepsCompleted === 0) {
        // User chose spade path - count up to 2 steps max
        adjustedCompletedSteps += Math.min(spadeStepsCompleted, 2);
    } else if (crocStepsCompleted > 0 && spadeStepsCompleted === 0) {
        // User chose croc path - count up to 2 steps max
        adjustedCompletedSteps += Math.min(crocStepsCompleted, 2);
    } else if (spadeStepsCompleted > 0 && crocStepsCompleted > 0) {
        // User completed both paths - only count 2 steps total
        adjustedCompletedSteps += 2;
    }
    
    // Count testing completion
    if (completedSteps.has('testing-complete')) {
        adjustedCompletedSteps++;
    }
    
    const percentage = Math.round((adjustedCompletedSteps / totalSteps) * 100);
    
    progressFill.style.width = percentage + '%';
    progressPercent.textContent = percentage + '%';
    
    // Show start again button if any progress has been made
    if (completedSteps.size > 0) {
        startAgainBtn.style.display = 'block';
    } else {
        startAgainBtn.style.display = 'none';
    }
    
    // Change color based on progress
    if (percentage >= 100) {
        progressFill.style.background = 'linear-gradient(90deg, #2ecc71, #27ae60)';
        showCompletionMessage();
    } else if (percentage >= 75) {
        progressFill.style.background = 'linear-gradient(90deg, #f39c12, #e67e22)';
    } else {
        progressFill.style.background = 'linear-gradient(90deg, #4facfe, #00f2fe)';
    }
}

// Show encouraging messages
function showEncouragement(stepNumber) {
    const messages = i18n.encouragements[LANG] || i18n.encouragements.en;
    const milestones = i18n.milestones[LANG] || i18n.milestones.en;
    
    let message = milestones[stepNumber] || messages[Math.floor(Math.random() * messages.length)];
    
    showToast(message);
}

// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 1000;
        font-weight: 600;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(toast);
    
    // Slide in
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Slide out and remove
    setTimeout(() => {
        toast.style.transform = 'translateX(400px)';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Modified completion flow - guide to testing instead of immediate celebration
function showCompletionMessage() {
    // Don't show celebration yet - guide to testing first
    showToast(t('buildComplete'));
    
    // Scroll to testing section
    setTimeout(() => {
        const testingSection = document.getElementById('testing-section');
        testingSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }, 1000);
}

// Testing functionality
let completedTests = new Set();
let testResults = new Map();

function completeTest(testNumber) {
    completedTests.add(testNumber);
    const testStep = document.querySelector(`[data-test="${testNumber}"]`);
    const button = testStep.querySelector('.btn-test-complete');
    
    button.innerHTML = t('testCompleteDone');
    button.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
    
    showToast(t('testCompleted', testNumber));
}

function testResult(testNumber, result) {
    testResults.set(testNumber, result);
    const testStep = document.querySelector(`[data-test="${testNumber}"]`);
    
    if (result === 'pass') {
        testStep.style.background = 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)';
        testStep.style.borderLeft = '5px solid #2ecc71';
        showToast(t('testPassed', testNumber));
    } else {
        testStep.style.background = 'linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%)';
        testStep.style.borderLeft = '5px solid #e74c3c';
        showToast(t('testNeedsAttention', testNumber));
    }
    
    // Check if all critical tests are done
    checkTestingComplete();
}

function checkTestingComplete() {
    const test3Result = testResults.get(3);
    const test4Result = testResults.get(4);
    
    if (test3Result && test4Result) {
        if (test3Result === 'pass' && test4Result === 'pass') {
            // All tests passed - mark testing as complete step and update progress
            completedSteps.add('testing-complete');
            updateProgress();
            saveProgress();
            
            // Show success
            document.getElementById('testing-complete').style.display = 'block';
            setTimeout(() => {
                showToast(t('allTestsPassed'), 'success');
            }, 500);
        } else {
            // Some tests failed - show troubleshooting
            const troubleshootingSection = document.getElementById('troubleshooting-section');
            troubleshootingSection.style.display = 'block';
            
            setTimeout(() => {
                troubleshootingSection.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }, 500);
            
            showToast(t('troubleshoot'));
        }
    }
}

// Start again function - reset all progress
function startAgain() {
    if (confirm(t('confirmStartAgain'))) {
        // Clear all completed steps
        completedSteps.clear();
        
        // Reset all step cards
        const stepCards = document.querySelectorAll('.step-card');
        stepCards.forEach(card => {
            card.classList.remove('completed', 'expanded');
            const button = card.querySelector('.btn-complete');
            if (button) {
                button.innerHTML = t('markComplete');
                button.style.background = 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)';
            }
        });
        
        // Reset test states
        const testSteps = document.querySelectorAll('.test-step');
        testSteps.forEach(step => {
            step.classList.remove('completed', 'failed');
        });
        
        // Reset troubleshooting states
        const troubleSteps = document.querySelectorAll('.trouble-step');
        troubleSteps.forEach(step => {
            step.classList.remove('fixed');
        });
        
        // Hide testing and troubleshooting sections
        document.getElementById('testing-section').style.display = 'none';
        document.getElementById('troubleshooting-section').style.display = 'none';
        document.getElementById('testing-complete').style.display = 'none';
        
        // Reset celebration modal
        const celebrationModal = document.getElementById('celebration-modal');
        if (celebrationModal) {
            celebrationModal.style.display = 'none';
        }
        
        // Clear test results
        testResults.clear();
        completedTests.clear();
        
        // Remove testing completion from progress
        completedSteps.delete('testing-complete');
        
        // Reset troubleshooting button states
        const troubleButtons = document.querySelectorAll('.btn-trouble-fixed');
        troubleButtons.forEach(button => {
            button.innerHTML = t('fixedIssue');
            button.style.background = 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)';
        });
        
        // Reset test button states
        const testButtons = document.querySelectorAll('.btn-test-complete');
        testButtons.forEach(button => {
            button.innerHTML = t('testComplete');
            button.style.background = 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)';
        });
        
        // Expand first step
        const firstStep = document.querySelector('[data-step="1"]');
        if (firstStep) {
            firstStep.classList.add('expanded');
        }
        
        // Update progress and save
        updateProgress();
        saveProgress();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        showToast(t('startingFresh'), 'info');
    }
}

function troubleFixed(issueNumber) {
    const troubleStep = document.querySelectorAll('.trouble-step')[issueNumber - 1];
    const button = troubleStep.querySelector('.btn-trouble-fixed');
    // ...
    
    button.innerHTML = t('fixedDone');
    button.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
    troubleStep.style.background = 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)';
    
    showToast(t('issueFixed', issueNumber));
}

function retestController() {
    // Reset test results
    testResults.clear();
    
    // Hide troubleshooting and show testing again
    document.getElementById('troubleshooting-section').style.display = 'none';
    document.getElementById('testing-complete').style.display = 'none';
    
    // Reset test step styles
    document.querySelectorAll('.test-step').forEach(step => {
        step.style.background = 'linear-gradient(135deg, #f8f9ff 0%, #e8f0ff 100%)';
        step.style.borderLeft = 'none';
    });
    
    // Scroll back to testing
    setTimeout(() => {
        document.getElementById('testing-section').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }, 500);
    
    showToast(t('retesting'));
}

function showFinalCelebration() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
    `;
    
    const content = document.createElement('div');
    content.style.cssText = `
        background: white;
        padding: 40px;
        border-radius: 20px;
        text-align: center;
        max-width: 500px;
        margin: 20px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    `;
    
    content.innerHTML = `
        <div style="font-size: 4rem; margin-bottom: 20px;">🏆</div>
        <h2 style="color: #2ecc71; margin-bottom: 20px; font-size: 2rem;">${t('missionTitle')}</h2>
        <p style="font-size: 1.2rem; margin-bottom: 30px; color: #2c3e50;">
            ${t('missionBody')}
        </p>
        <button onclick="this.parentElement.parentElement.remove()" 
                style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); 
                       color: white; border: none; padding: 15px 30px; 
                       border-radius: 25px; font-size: 1.1rem; 
                       font-weight: 600; cursor: pointer;">
            ${t('missionButton')}
        </button>
    `;
    
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    // Add confetti effect
    createConfetti();
}

// Create confetti effect
function createConfetti() {
    const colors = ['#4facfe', '#00f2fe', '#2ecc71', '#f39c12', '#e74c3c', '#9b59b6'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                top: -10px;
                left: ${Math.random() * 100}%;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: 50%;
                pointer-events: none;
                z-index: 1500;
                animation: confettiFall 3s linear forwards;
            `;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 100);
    }
    
    // Add confetti animation if not already added
    if (!document.querySelector('#confettiStyle')) {
        const style = document.createElement('style');
        style.id = 'confettiStyle';
        style.textContent = `
            @keyframes confettiFall {
                to {
                    transform: translateY(100vh) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Save progress to localStorage
function saveProgress() {
    localStorage.setItem('aquabot-progress', JSON.stringify([...completedSteps]));
}

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('aquabot-progress');
    if (saved) {
        const steps = JSON.parse(saved);
        steps.forEach(stepNumber => {
            completedSteps.add(stepNumber);
            const stepCard = document.querySelector(`[data-step="${stepNumber}"]`);
            const button = stepCard.querySelector('.btn-complete');
            
            stepCard.classList.add('completed');
            button.innerHTML = t('completed');
            button.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
        });
        updateProgress();
    }
}

// Reset progress (for testing)
function resetProgress() {
    if (confirm(t('confirmReset'))) {
        completedSteps.clear();
        localStorage.removeItem('aquabot-progress');
        
        document.querySelectorAll('.step-card').forEach(card => {
            card.classList.remove('completed');
            const button = card.querySelector('.btn-complete');
            button.innerHTML = t('markComplete');
            button.style.background = 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)';
        });
        
        updateProgress();
        showToast(t('progressReset'));
    }
}

// Smooth scrolling for navigation
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Press 'r' to reset progress (for testing)
    if (e.key === 'r' && e.ctrlKey) {
        e.preventDefault();
        resetProgress();
    }
    
    // Press 'p' to show current progress
    if (e.key === 'p' && e.ctrlKey) {
        e.preventDefault();
        showToast(t('progressStatus', completedSteps.size));
    }
});

// Show connection steps based on choice
function showSteps(type) {
    const spadeSteps = document.getElementById('spade-steps');
    const crocSteps = document.getElementById('croc-steps');
    
    if (type === 'spade') {
        spadeSteps.style.display = 'block';
        crocSteps.style.display = 'none';
        
        // Expand first step in spade section
        setTimeout(() => {
            const firstSpadeStep = spadeSteps.querySelector('[data-step="17"]');
            if (firstSpadeStep) {
                firstSpadeStep.classList.add('expanded');
                firstSpadeStep.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest' 
                });
            }
        }, 300);
        
        showToast(t('choiceSpade'));
    } else if (type === 'croc') {
        crocSteps.style.display = 'block';
        spadeSteps.style.display = 'none';
        
        // Expand first step in croc section
        setTimeout(() => {
            const firstCrocStep = crocSteps.querySelector('[data-step="22"]');
            if (firstCrocStep) {
                firstCrocStep.classList.add('expanded');
                firstCrocStep.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest' 
                });
            }
        }, 300);
        
        showToast(t('choiceCroc'));
    }
}

// Print the full guide
function printGuide() {
    // Store original inline display states so we can restore them after printing
    const spadeSteps = document.getElementById('spade-steps');
    const crocSteps = document.getElementById('croc-steps');
    const troubleshootingSection = document.getElementById('troubleshooting-section');

    const origSpade = spadeSteps.style.display;
    const origCroc = crocSteps.style.display;
    const origTrouble = troubleshootingSection.style.display;

    // Temporarily show all hidden sections so they appear in print
    spadeSteps.style.display = 'block';
    crocSteps.style.display = 'block';
    troubleshootingSection.style.display = 'block';

    // Small delay to let the browser re-layout before printing
    setTimeout(() => {
        window.print();
    }, 100);

    // Restore original states after the print dialog closes
    window.addEventListener('afterprint', function restoreState() {
        spadeSteps.style.display = origSpade;
        crocSteps.style.display = origCroc;
        troubleshootingSection.style.display = origTrouble;
        window.removeEventListener('afterprint', restoreState);
    }, { once: true });
}

// Add touch support for mobile devices
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        // Add any swipe functionality here if needed
    }
}
