const { ref, reactive, computed, watchEffect, watch, onMounted } = require('vue')

function useFeature() {
    onMounted(() => console.log('mounted'))
}

export default {
    template: `{{ event.count }}`,
    props: ['id'],
    setup(props) {
        useFeature()

        return {
            event: {
                count: ref(0)
            }
        }
    }
}