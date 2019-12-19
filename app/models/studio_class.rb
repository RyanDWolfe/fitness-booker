class StudioClass < ApplicationRecord

validates :name, :class_type, :description, :occupancy, :studio_id, presence: true

    belongs_to :studio
    has_many :reservations

end
