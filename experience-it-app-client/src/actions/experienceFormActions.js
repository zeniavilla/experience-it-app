// ** Action Creators **
export const updateExperienceFormData = experienceFormData => {
    return {
        type: 'UPDATED_DATA',
        experienceFormData
    }
}

export const resetExperienceForm = () => {
    return {
        type: 'RESET_EXPERIENCE_FORM'
    }
}