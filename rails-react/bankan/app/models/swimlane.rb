class Swimlane < ApplicationRecord
  belongs_to :board
  has_many :columns, -> { order(position: :asc) }
end
