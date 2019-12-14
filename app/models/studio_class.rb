class StudioClass < ApplicationRecord

    belongs_to :studio
    has_many :reservations

end
