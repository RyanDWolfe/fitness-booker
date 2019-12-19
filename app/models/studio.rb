class Studio < ApplicationRecord

    validates :name, :class_type, :description, :address, presence: true
    validates :name, :address, uniqueness: true

    has_many :studio_classes, :dependent => :destroy
    has_many :reservations, :dependent => :destroy
end