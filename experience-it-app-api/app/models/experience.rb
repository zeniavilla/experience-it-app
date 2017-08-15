class Experience < ApplicationRecord
    after_initialize :set_defaults

    def set_defaults
        self.liked ||= false
        self.likes ||= 0
    end
end
