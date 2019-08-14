class Column < ApplicationRecord
  belongs_to :swimlane
  has_many :cards, -> { order(position: :asc) }
end
