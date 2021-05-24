const getPolyVector = require('./functions/getPolyVector')
const getPlacementCells = require('./functions/getPlacementCells')
const getTypeCells = require('./functions/getTypeCells')
const buildDefaultFilters = require('./defaultFilters/buildDefaultFilters')
const generateUi = require('./ui')
const updateAvailableForms = require('./functions/updateAvailableForms')
const buildMenus = require('./buildMenus')
const fetchJson = require('./functions/fetchJson')
const fetchRaids = require('./functions/fetchRaids')
const fetchQuests = require('./functions/fetchQuests')

class Utility {
  static getPolyVector(s2cellId, type) {
    return getPolyVector(s2cellId, type)
  }

  static getPlacementCells(bounds, pokestops, gyms) {
    return getPlacementCells(bounds, pokestops, gyms)
  }

  static getTypeCells(bounds, pokestops, gyms) {
    return getTypeCells(bounds, pokestops, gyms)
  }

  static async updateAvailableForms(icons) {
    return updateAvailableForms(icons)
  }

  static buildDefaultFilters(perms) {
    return buildDefaultFilters(perms)
  }

  static generateUi(filters, perms) {
    return generateUi(filters, perms)
  }

  static buildMenus() {
    return buildMenus()
  }

  static async fetchJson(url) {
    return fetchJson(url)
  }

  static async fetchRaids() {
    return fetchRaids()
  }

  static async fetchQuests() {
    return fetchQuests()
  }
}

module.exports = Utility
