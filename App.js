import React, { useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const initialMedications = [
  { id: '1', name: 'Metformin 500 mg', dose: '1 tablet', time: '08:00', pillsLeft: 21, acknowledged: false },
  { id: '2', name: 'Vitamin D3', dose: '2 capsules', time: '13:00', pillsLeft: 14, acknowledged: false },
  { id: '3', name: 'Lisinopril 10 mg', dose: '1 tablet', time: '20:00', pillsLeft: 9, acknowledged: false }
];

export default function App() {
  const [medications, setMedications] = useState(initialMedications);
  const [alertCount, setAlertCount] = useState(0);
  const [lastAction, setLastAction] = useState('Ожидание подтверждений...');

  const adherence = useMemo(() => {
    const done = medications.filter((m) => m.acknowledged).length;
    return Math.round((done / medications.length) * 100);
  }, [medications]);

  const confirmDose = (id) => {
    setMedications((prev) =>
      prev.map((m) =>
        m.id === id
          ? {
              ...m,
              acknowledged: true,
              pillsLeft: Math.max(0, m.pillsLeft - 1)
            }
          : m
      )
    );
    setLastAction('✅ Прием подтвержден. Остаток обновлен автоматически.');
  };

  const snoozeDose = (name) => {
    setLastAction(`⏰ ${name}: повторное напоминание через 3 минуты.`);
  };

  const alertCaregiver = (name) => {
    setAlertCount((count) => count + 1);
    setLastAction(`📞 Экстренное уведомление отправлено опекуну: ${name}.`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>MedRemind</Text>
        <Text style={styles.subtitle}>The right pill, the right dose, the right time.</Text>

        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Сегодняшняя дисциплина приема</Text>
          <Text style={styles.metric}>{adherence}%</Text>
          <Text style={styles.panelText}>Emergency alerts: {alertCount}</Text>
        </View>

        {medications.map((med) => (
          <View key={med.id} style={styles.card}>
            <View style={styles.rowBetween}>
              <Text style={styles.medName}>{med.name}</Text>
              <Text style={styles.time}>{med.time}</Text>
            </View>

            <Text style={styles.details}>Доза: {med.dose}</Text>
            <Text style={styles.details}>Осталось: {med.pillsLeft}</Text>
            <Text style={styles.status}>{med.acknowledged ? 'Принято ✅' : 'Ожидает подтверждения'}</Text>

            <View style={styles.actions}>
              <TouchableOpacity
                style={[styles.button, styles.confirmButton]}
                onPress={() => confirmDose(med.id)}
                disabled={med.acknowledged}
              >
                <Text style={styles.buttonText}>Подтвердить</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button, styles.snoozeButton]} onPress={() => snoozeDose(med.name)}>
                <Text style={styles.buttonText}>+3 мин</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.alertButton]}
                onPress={() => alertCaregiver(med.name)}
              >
                <Text style={styles.buttonText}>SOS</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Быстрые AI функции (демо)</Text>
          <Text style={styles.panelText}>📄 OCR: распознать рецепт и добавить в расписание.</Text>
          <Text style={styles.panelText}>🎙️ Voice: добавить лекарство через диктовку.</Text>
          <Text style={styles.panelText}>💊 Аптеки: поиск и быстрый заказ по назначению врача.</Text>
        </View>

        <Text style={styles.lastAction}>{lastAction}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7ff'
  },
  content: {
    padding: 18,
    paddingBottom: 28,
    gap: 14
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#243b76'
  },
  subtitle: {
    color: '#4a5d97',
    marginBottom: 8
  },
  panel: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 14,
    shadowColor: '#a1b0df',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3
  },
  panelTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#243b76'
  },
  metric: {
    fontSize: 40,
    fontWeight: '800',
    color: '#3358d4'
  },
  panelText: {
    color: '#3c4c7f',
    marginTop: 4
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#e1e8ff'
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  medName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1f2e5f'
  },
  time: {
    color: '#5f73af',
    fontWeight: '600'
  },
  details: {
    color: '#415181',
    marginTop: 4
  },
  status: {
    marginTop: 6,
    color: '#23315e',
    fontWeight: '600'
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 10
  },
  button: {
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10
  },
  confirmButton: {
    backgroundColor: '#37a56b'
  },
  snoozeButton: {
    backgroundColor: '#5f78d6'
  },
  alertButton: {
    backgroundColor: '#da4e67'
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700'
  },
  lastAction: {
    marginTop: 2,
    color: '#273971',
    fontWeight: '600'
  }
});
